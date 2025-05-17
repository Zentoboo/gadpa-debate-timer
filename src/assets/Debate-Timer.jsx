import React, { useState, useEffect } from 'react';
import './Debate-Timer.css';

function DebateTimer() {
    const [timers, setTimers] = useState([]);
    const [title, setTitle] = useState('');
    const [minutes, setMinutes] = useState('');
    const [selectedTimerIndex, setSelectedTimerIndex] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleMinutesChange = (e) => setMinutes(e.target.value);

    const addTimer = () => {
        setTimers([...timers, { title, duration: minutes * 60 }]);
        setTitle('');
        setMinutes('');
    };

    const selectTimer = (index) => {
        setSelectedTimerIndex(index);
        setTimeLeft(timers[index].duration);
        setIsActive(false);
    };

    const startTimer = () => setIsActive(true);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const deleteTimer = (index) => {
        const updatedTimers = timers.filter((_, i) => i !== index);
        setTimers(updatedTimers);
        if (index === selectedTimerIndex) {
            setSelectedTimerIndex(null);
            setIsActive(false);
            setTimeLeft(0);
        } else if (index < selectedTimerIndex) {
            setSelectedTimerIndex(selectedTimerIndex - 1);
        }
    };

    const clearAllTimers = () => {
        setTimers([]);
        setSelectedTimerIndex(null);
        setIsActive(false);
        setTimeLeft(0);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="timer-container">
            {/* Countdown Display */}
            <div className="timer-display">
                <div className="timer-title">
                    {selectedTimerIndex !== null ? `--${timers[selectedTimerIndex].title}--` : '--No Timer Selected--'}
                </div>
                <div className={`current-time ${timeLeft === 0 && selectedTimerIndex !== null ? 'red-blink' : ''}`}>
                    {selectedTimerIndex !== null ? formatTime(timeLeft) : '00:00'}
                </div>
                <button 
                    className="button"
                    onClick={startTimer}
                    disabled={isActive || timeLeft === 0 || selectedTimerIndex === null}
                >
                    Start
                </button>
            </div>

            {/* Timer Input Form */}
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={handleTitleChange}
                    className="input"
                />
                <input
                    type="number"
                    placeholder="Minutes"
                    value={minutes}
                    onChange={handleMinutesChange}
                    className="input"
                />
                <button 
                    onClick={addTimer} 
                    disabled={!title || !minutes}
                    className="button"
                >
                    Add Timer
                </button>
                {timers.length > 0 && (
                    <button 
                        onClick={clearAllTimers} 
                        className="button delete-button"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {/* Timer List */}
            {timers.length > 0 && (
                <table className="timer-table">
                    <thead>
                        <tr>
                            <th style={{ width: '25%', textAlign: 'left' }}>Title</th>
                            <th style={{ width: '50%', textAlign: 'center' }}>Duration</th>
                            <th style={{ width: '25%', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timers.map((timer, index) => (
                            <tr 
                                key={index}
                                className={selectedTimerIndex === index ? 'selected' : ''}
                            >
                                <td style={{ width: '25%', textAlign: 'left'}}>{timer.title}</td>
                                <td style={{ width: '50%', textAlign: 'center' }}>{formatTime(timer.duration)}</td>
                                <td className="action-cell">
                                    <button
                                        onClick={() => selectTimer(index)}
                                        className="button small-button"
                                    >
                                        ▶
                                    </button>
                                    <button
                                        onClick={() => deleteTimer(index)}
                                        className="button small-button delete-button"
                                    >
                                        ×
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default DebateTimer;
