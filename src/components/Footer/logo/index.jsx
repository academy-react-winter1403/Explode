import IconSet from '../../shared/IconSet'
import logoSvg from '/src/assets/img/logo.svg'
import titleSvg from '/src/assets/img/title.svg'
const Logo = () => {
    return (
        <div className="flex items-center gap-[10px] width-[240px] max-[1210px]:order-1 max-[1210px]:w-[auto]">
            <IconSet imageAddress={logoSvg} firstSize={42} secondSize={40} />
            <IconSet imageAddress={titleSvg} firstSize={189} secondSize={38} className={"relative top-[8px] max-[700px]:hidden"} />
        </div>
    )
}
export default Logo