import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaTimes, FaStepBackward, FaStepForward } from 'react-icons/fa';
import styles from '../styles/AudioPlayer.module.css';

export default function AudioPlayer({ src, onClose, onNext, onPrev, prevSurah, nextSurah }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Copy the current value of audioRef to a local variable
        const audioElement = audioRef.current;

        if (src && audioElement) {
            const playAudio = async () => {
                try {
                    await audioElement.play();
                    setIsPlaying(true);
                    setError('');
                } catch (err) {
                    setError('خطأ في تشغيل الصوت.');
                }
            };

            playAudio();

            // Clean up function
            return () => {
                if (audioElement) {
                    audioElement.pause();
                    audioElement.currentTime = 0;
                }
            };
        }
    }, [src]);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(prev => !prev); // Use functional update
        }
    };

    const handleClose = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
        if (onClose) onClose();
    };

    return (
        <div className={styles.audioPlayer}>
            {error && <p className={styles.error}>{error}</p>}
            {src ? (
                <div className={styles.controls}>
                    <button
                        className={styles.controlButton}
                        onClick={onPrev}
                        disabled={!prevSurah}
                        title="السورة السابقة"
                    >
                        <FaStepBackward />
                        <span>{prevSurah || 'لا توجد سورة سابقة'}</span>
                    </button>
                    <button
                        className={styles.controlButton}
                        onClick={handlePlayPause}
                        title={isPlaying ? 'إيقاف' : 'تشغيل'}
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button
                        className={styles.controlButton}
                        onClick={onNext}
                        disabled={!nextSurah}
                        title="السورة التالية"
                    >
                        <span>{nextSurah || 'لا توجد سورة تالية'}</span>
                        <FaStepForward />
                    </button>
                    <button
                        className={styles.closeButton}
                        onClick={handleClose}
                        title="إغلاق"
                    >
                        <FaTimes />
                    </button>
                    <audio controls ref={audioRef} src={src} className={styles.audioElement} />
                </div>
            ) : (
                <p className={styles.placeholder}>اختر سورة لتشغيلها</p>
            )}
        </div>
    );
}