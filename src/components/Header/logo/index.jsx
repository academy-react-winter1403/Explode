import IconSet from '../../shared/IconSet/index';
import logoSvg from '/src/assets/img/logo.svg'
import titleSvg from '/src/assets/img/title.svg'
const Logo = () => {
    return (
        <div className="flex w-[200px] items-center gap-[10px] max-[870px]:w-[auto]">
            <IconSet imageAddress={logoSvg} firstSize={42} secondSize={40} />
            <IconSet imageAddress={titleSvg} firstSize={189} secondSize={38} className={"relative top-[8px] max-[870px]:hidden"}/>
        </div>
    )
}
export default Logo