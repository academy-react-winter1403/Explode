import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ReactMic } from 'react-mic';
import clsx from 'clsx';
import { AiQuestionReq } from '../../../../../core/services/ai';
import { TranscribeAudioReq } from '../../../../../core/services/ai';

const techStacks = ['فرانت‌اند', 'بک‌اند', 'فول‌استک', 'دواپس'];
const seniorityLevels = ['جونیور', 'میان‌رده', 'سنیور'];
const questionCounts = [5, 10, 15, 20];

const InterviewAi = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const [stage, setStage] = useState('options');
  const [techStack, setTechStack] = useState('');
  const [seniority, setSeniority] = useState('');
  const [questionCount, setQuestionCount] = useState(20);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0); // از 0 شروع می‌شود
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [score, setScore] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [probability, setProbability] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);

  // ایجاد useRef برای ردیابی currentQuestion
  const currentQuestionRef = useRef(currentQuestion);

  // همگام‌سازی currentQuestionRef با currentQuestion
  useEffect(() => {
    currentQuestionRef.current = currentQuestion;
    console.log('currentQuestionRef updated to:', currentQuestionRef.current);
  }, [currentQuestion]);

  // تایمر برای ضبط
  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  // همگام‌سازی currentAnswer با answers[currentQuestion]
  useEffect(() => {
    setCurrentAnswer(answers[currentQuestion] || '');
  }, [currentQuestion, answers]);

  const startRecording = () => {
    if (!navigator.mediaDevices) {
      setError('دسترسی به میکروفون در این مرورگر پشتیبانی نمی‌شود.');
      return;
    }
    setIsRecording(true);
    setError(null);
    console.log(
      'Recording started for question:',
      currentQuestionRef.current + 1,
    );
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log(
      'Recording stopped for question:',
      currentQuestionRef.current + 1,
    );
  };

  const onStopRecording = useCallback(
    (recordedBlob) => {
      console.log(
        'onStopRecording called, currentQuestionRef:',
        currentQuestionRef.current,
      );

      if (!recordedBlob.blob || recordedBlob.blob.size === 0) {
        setError('هیچ داده صوتی ضبط نشد.');
        console.error('No audio data recorded');
        return;
      }

      setAudioBlob(recordedBlob.blob);
      setIsLoading(true);

      // استفاده از currentQuestionRef.current به جای currentQuestion
      const questionIndex = currentQuestionRef.current;
      console.log('Processing audio for questionIndex:', questionIndex + 1);

      // فراخوانی تابع ناهمزمان با ارسال questionIndex
      processAudio(recordedBlob.blob, questionIndex);
    },
    [], // وابستگی خالی، چون از currentQuestionRef استفاده می‌کنیم
  );

  const processAudio = async (audioBlob, questionIndex) => {
    console.log('START processAudio, questionIndex:', questionIndex + 1);
    try {
      const result = await TranscribeAudioReq(audioBlob, 'fa-IR');
      console.log('Transcript result:', result);

      const transcript = result.transcript || '';
      setAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[questionIndex] = transcript;
        console.log('Updated answers:', newAnswers);
        return newAnswers;
      });

      // فقط اگر سؤال فعلی هنوز همان سؤال ضبط‌شده است، currentAnswer را به‌روزرسانی کن
      if (currentQuestionRef.current === questionIndex) {
        setCurrentAnswer(transcript);
        console.log('Updated currentAnswer:', transcript);
      } else {
        console.log(
          'Current question has changed, skipping currentAnswer update. Current:',
          currentQuestionRef.current,
          'Received:',
          questionIndex,
        );
      }
    } catch (err) {
      console.error('خطا در پردازش صدا:', err);
      setError('خطا در تبدیل صدا به متن: ' + err.message);
    } finally {
      setIsLoading(false);
      console.log('anser', answers);
      console.log('END processAudio');
    }
  };

  const fetchQuestions = async () => {
    if (!techStack || !seniority) {
      setError('لطفاً فناوری و سطح تجربه را انتخاب کنید.');
      return;
    }
    setError(null);
    setIsLoading(true);
    const prompt = `
      تولید ${questionCount} سؤال مصاحبه فنی برای یک توسعه‌دهنده ${seniority} ${techStack}. 
      سؤالات باید:
      - مختصر و متمرکز بر جنبه‌های فنی نقش باشند.
      - مناسب سطح ${seniority} باشند.
      - به زبان فارسی و به صورت حرفه‌ای نوشته شوند.
      خروجی به صورت JSON با کلید "questions" حاوی آرایه‌ای از رشته‌ها.
    `;
    try {
      const response = await AiQuestionReq({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      });

      const parsedContent = JSON.parse(response.choices[0].message.content);
      const questionsArray = parsedContent.questions || [];
      if (questionsArray.length > 0) {
        setQuestions(questionsArray);
        setAnswers(Array(questionsArray.length).fill(''));
        setCurrentAnswer('');
        setStage('questions');
        setCurrentQuestion(0);
      } else {
        throw new Error('هیچ سؤالی دریافت نشد.');
      }
    } catch (error) {
      setError('خطا در دریافت سؤالات: ' + error.message);
      setQuestions([
        'تفاوت بین REST و SOAP چیست؟',
        'تفاوت GET و POST در HTTP چیست؟',
      ]);
      setAnswers(Array(2).fill(''));
      setCurrentAnswer('');
      setStage('questions');
      setCurrentQuestion(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerChange = (e) => {
    const newValue = e.target.value;
    setCurrentAnswer(newValue);
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = newValue;
      console.log('handleAnswerChange, new answers:', newAnswers);
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (!currentAnswer && !audioBlob) {
      setError('لطفاً پاسخ دهید یا صدا ضبط کنید.');
      return;
    }
    if (isLoading) {
      setError('لطفاً صبر کنید تا پردازش صدا کامل شود.');
      return;
    }
    if (isRecording) {
      setError('لطفاً ابتدا ضبط را متوقف کنید.');
      return;
    }
    if (currentQuestion < questions.length - 1) {
      console.log(
        `Moving to question ${currentQuestion + 2}, currentQuestion: ${currentQuestion}, answers:`,
        answers,
      );
      setCurrentQuestion(currentQuestion + 1);
      setAudioBlob(null);
      setError(null);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = async () => {
    setError(null);
    setIsLoading(true); // شروع لودینگ
    const prompt = `
      پاسخ‌های زیر را برای یک توسعه‌دهنده ${seniority} ${techStack} تحلیل کنید. 
      سؤالات و پاسخ‌ها:
      ${questions.map((q, i) => `سؤال ${i + 1}: ${q}\nپاسخ: ${answers[i] || 'بدون پاسخ'}`).join('\n')}
      لطفاً تحلیل را به فارسی ارائه دهید و خروجی را به صورت JSON با فیلدهای زیر برگردانید:
      - score: اگر حواب ها بی ربط بود صفر بده امتیاز از 0 تا 100
      - analysis: تحلیل پاسخ‌ها (رشته)
      - probability: احتمال موفقیت شغلی (0 تا 99%)اگر جواب ها بی ربط بود 0 بده
      -  اگر پاسخ‌ها بی‌ربط باشند، فقط بنویسید: " شما نیازمند تلاش بیشتری هستید."
      مثال: { "score": 85, "analysis": "دانش قوی در ری‌اکت...", "probability": 90 }
    `;
    try {
      const response = await AiQuestionReq({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      });

      if (response && response.choices && response.choices.length > 0) {
        const result = JSON.parse(response.choices[0].message.content);
        if (
          result.score !== undefined &&
          result.analysis &&
          result.probability !== undefined
        ) {
          setScore(result.score);
          setAnalysis(result.analysis);
          setProbability(result.probability);
          setStage('results');
        } else {
          throw new Error('تحلیل دریافت‌شده ناقص است.');
        }
      } else {
        throw new Error('پاسخ معتبر از هوش مصنوعی دریافت نشد.');
      }
    } catch (error) {
      console.error('Error parsing AI analysis:', error);
      setError('خطا در پردازش تحلیل دریافت‌شده از هوش مصنوعی.');
      // فال‌بک به مقادیر موک
      setScore(85);
      setAnalysis(
        'شما دانش قوی در ری‌اکت و جاوااسکریپت نشان دادید، اما بهتر است روی CSS Grid بیشتر کار کنید.',
      );
      setProbability(90);
      setStage('results');
    } finally {
      setIsLoading(false); // پایان لودینگ
    }
  };

  const newInterviewHandler = () => {
    if (
      window.confirm('آیا مطمئن هستید که می‌خواهید مصاحبه جدیدی شروع کنید؟')
    ) {
      setStage('options');
      setTechStack('');
      setSeniority('');
      setQuestionCount(20);
      setQuestions([]);
      setCurrentQuestion(0);
      setAnswers([]);
      setCurrentAnswer('');
      setScore(null);
      setAnalysis('');
      setProbability(null);
      setError(null);
      setIsLoading(false);
      setAudioBlob(null);
      setRecordingTime(0);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex min-h-screen justify-center p-4">
      {stage === 'options' ? (
        <div
          className={clsx(
            'mt-[60px] h-full w-full max-w-2xl transform rounded-lg p-8 shadow-xl transition-all hover:scale-[1.01]',
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800',
          )}
        >
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
            مصاحبه شغلی با هوش مصنوعی
          </h2>
          {error && (
            <p className="mb-4 rounded-md bg-red-100 p-2 text-center text-red-600">
              {error}
            </p>
          )}
          {isLoading && (
            <div className="mb-6 flex justify-center">
              <svg
                className="h-6 w-6 animate-spin text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4zm12 0v-4a4 4 0 4 4 4h-4z"
                />
              </svg>
            </div>
          )}
          <div className="mb-6">
            <label className="mb-2 block font-medium">فناوری استخدام</label>
            <select
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              className={clsx(
                'w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none',
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-gray-200'
                  : 'border-gray-300 bg-white',
              )}
              disabled={isLoading}
            >
              <option value="">انتخاب کنید</option>
              {techStacks.map((stack) => (
                <option key={stack} value={stack}>
                  {stack}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-medium">سطح تجربه</label>
            <select
              value={seniority}
              onChange={(e) => setSeniority(e.target.value)}
              className={clsx(
                'w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none',
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-gray-200'
                  : 'border-gray-300 bg-white',
              )}
              disabled={isLoading}
            >
              <option value="">انتخاب کنید</option>
              {seniorityLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-medium">تعداد سؤالات</label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className={clsx(
                'w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none',
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-gray-200'
                  : 'border-gray-300 bg-white',
              )}
              disabled={isLoading}
            >
              {questionCounts.map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={fetchQuestions}
            disabled={!techStack || !seniority || isLoading}
            className={clsx(
              'w-full rounded-md p-3 font-medium text-white',
              !techStack || !seniority || isLoading
                ? 'cursor-not-allowed bg-gray-400'
                : 'bg-blue-600 hover:bg-blue-700',
            )}
          >
            {isLoading ? 'در حال بارگذاری...' : 'شروع مصاحبه'}
          </button>
        </div>
      ) : stage === 'questions' ? (
        <div
          className={clsx(
            'mt-[60px] h-full w-full max-w-3xl transform rounded-lg p-8 shadow-xl transition-all hover:scale-[1.01]',
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800',
          )}
        >
          <h2 className="mb-6 text-2xl font-bold">
            سؤال {currentQuestion + 1} از {questions.length}
          </h2>
          <p
            className={clsx(
              'mb-6 rounded-md p-4 text-lg',
              darkMode
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-100 text-gray-700',
            )}
          >
            {questions[currentQuestion]}
          </p>
          <textarea
            value={currentAnswer}
            onChange={handleAnswerChange}
            className={clsx(
              'w-full rounded-md border p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none',
              darkMode
                ? 'border-gray-600 bg-gray-700 text-gray-200'
                : 'border-gray-300 bg-white',
            )}
            rows={6}
            placeholder="پاسخ خود را بنویسید یا از ضبط صدا استفاده کنید..."
            disabled={isLoading}
          />
          <div className="mt-4">
            <ReactMic
              record={isRecording}
              onStop={onStopRecording}
              mimeType="audio/webm"
              className={clsx(
                'mb-2 h-16 w-full rounded-md',
                darkMode
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-100 text-gray-700',
              )}
            />
            {isRecording ? (
              <div
                className={clsx(
                  'flex items-center justify-between rounded-md p-4',
                  darkMode ? 'bg-gray-700' : 'bg-gray-100',
                )}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-4 w-1 animate-pulse bg-red-500"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <span
                    className={darkMode ? 'text-gray-300' : 'text-gray-700'}
                  >
                    {formatTime(recordingTime)}
                  </span>
                </div>
                <button
                  onClick={stopRecording}
                  disabled={isLoading}
                  className={clsx(
                    'rounded-md px-4 py-2 font-medium text-white',
                    isLoading
                      ? 'cursor-not-allowed bg-gray-400'
                      : 'bg-red-600 hover:bg-red-700',
                  )}
                >
                  توقف ضبط
                </button>
              </div>
            ) : (
              <button
                onClick={startRecording}
                disabled={isLoading}
                className={clsx(
                  'w-full rounded-md p-3 font-medium text-white',
                  isLoading
                    ? 'cursor-not-allowed bg-gray-400'
                    : 'bg-green-600 hover:bg-green-700',
                )}
              >
                شروع ضبط صدا
              </button>
            )}
            {audioBlob && (
              <audio
                controls
                src={URL.createObjectURL(audioBlob)}
                className={clsx('mt-4 w-full', {})}
              />
            )}
          </div>
          {error && (
            <p className="mt-4 rounded-md bg-red-100 p-2 text-red-600">
              {error}
            </p>
          )}
          {isLoading && (
            <div className="mt-4 flex justify-center">
              <svg
                className="h-6 w-6 animate-spin text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4zm12 0v-4a4 4 0 4 4 4h-4z"
                />
              </svg>
            </div>
          )}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              disabled={isLoading || isRecording}
              className={clsx(
                'rounded-md p-3 font-semibold text-white',
                isLoading || isRecording
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-blue-500 hover:bg-blue-600',
              )}
            >
              {isLoading
                ? 'در حال پردازش...'
                : currentQuestion < questions.length - 1
                  ? 'سؤال بعدی'
                  : 'ارسال پاسخ‌ها'}
            </button>
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            'mt-[60px] h-full w-full max-w-xl transform rounded-lg p-8 shadow-xl transition-all hover:scale-[1.01]',
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800',
          )}
        >
          <h2 className="mb-6 text-center text-3xl font-bold">نتایج مصاحبه</h2>
          {isLoading ? (
            <div className="mb-6 flex justify-center">
              <svg
                className="h-6 w-6 animate-spin text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4zm12 0v-4a4 4 0 4 4 4h-4z"
                />
              </svg>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg">
                <strong className="text-blue-600">امتیاز:</strong> {score}/100
              </p>
              <p className="text-lg">
                <strong className="text-blue-600">احتمال موفقیت:</strong>{' '}
                {probability}%
              </p>
              <p className="text-lg">
                <strong>تحلیل:</strong> {analysis}
              </p>
            </div>
          )}
          <button
            onClick={newInterviewHandler}
            disabled={isLoading}
            className={clsx(
              'mt-6 w-full rounded-md p-3 font-medium text-white',
              isLoading
                ? 'cursor-not-allowed bg-gray-400'
                : 'bg-blue-600 hover:bg-blue-700',
            )}
          >
            شروع مصاحبه جدید
          </button>
        </div>
      )}
    </div>
  );
};

export default InterviewAi;
