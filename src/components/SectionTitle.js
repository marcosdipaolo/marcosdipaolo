import {Trans} from "react-i18next";

const SectionTitle = ({tT, tBg}) => <div>
    <Trans i18nKey={tT}><h1 className="big mt-80 d-none d-sm-block"> <span> </span></h1></Trans>
    <p className="title-bg"><Trans i18nKey={tBg} /></p>
</div>

export default SectionTitle