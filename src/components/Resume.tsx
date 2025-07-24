import Button from './Button';
import useDownloadFile from '../hooks/useDownloadFile';
import resumePdf from "../assets/pdf/Henry_orji_Resume.pdf";

const Resume = () => {
    const { downloadFile } = useDownloadFile();
    return <Button
        title="Download Resume"
        onClick={() => downloadFile(resumePdf, 'henry-emeka-loveday-resume.pdf')}
        className="min-w-[84px] max-w-[480px]"
    />;
};

export default Resume;
