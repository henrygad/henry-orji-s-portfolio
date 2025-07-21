import Button from './Button';
import useDownloadFile from '../hooks/useDownloadFile';

const Resume = () => {
    const { downloadFile } = useDownloadFile();

    return <Button
        title="Download Resume"
        onClick={() => downloadFile('../assets/pdf/henry-emeka-loveday-resume.pdf', 'henry-emeka-loveday-resume.pdf')}
        className="min-w-[84px] max-w-[480px]"
    />;
};

export default Resume;
