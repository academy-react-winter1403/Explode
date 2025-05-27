export const AiQuestionReq = async (data) => {
  try {
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching AI questions:', error);
    throw error;
  }
};
export const TranscribeAudioReq = async (audioBlob, language = 'fa-IR') => {
  try {
    // ساخت FormData
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.webm'); // تغییر audio به file
    formData.append('model_id', 'scribe_v1'); // مدل STT
    formData.append('language', language); // زبان فارسی

    // کلید API
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

    const response = await fetch(
      'https://api.elevenlabs.io/v1/speech-to-text',
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
        },
        body: formData,
      },
    );

    const result = await response.json();

    if (!result.text) {
      throw new Error('متن دریافت نشد.');
    }

    return { transcript: result.text };
  } catch (error) {
    console.error('خطا در تبدیل صدا به متن:', error);
    throw new Error(`خطا در تبدیل صدا به متن: ${error.message}`);
  }
};
