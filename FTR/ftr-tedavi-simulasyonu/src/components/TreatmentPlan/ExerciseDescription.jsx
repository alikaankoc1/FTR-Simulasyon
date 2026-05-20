import React from 'react';

/** "Amaç: ...\n\nBaşlangıç pozisyonu: ..." metnini okunabilir bloklara böler. */
export function parseExerciseDescription(text) {
    if (!text || typeof text !== 'string') return [];
    return text
        .split(/\n\n+/)
        .map((block) => {
            const trimmed = block.trim();
            if (!trimmed) return null;
            const colonIndex = trimmed.indexOf(':');
            if (colonIndex > 0 && colonIndex < 80) {
                const label = trimmed.slice(0, colonIndex).trim();
                const body = trimmed.slice(colonIndex + 1).trim();
                if (body) return { label, body };
            }
            return { label: null, body: trimmed };
        })
        .filter(Boolean);
}

const ExerciseDescription = ({ text }) => {
    const blocks = parseExerciseDescription(text);

    return (
        <div className="exercise-description">
            {blocks.map((block, index) => (
                <div key={index} className="exercise-detail-block">
                    {block.label && (
                        <span className="exercise-detail-label">{block.label}</span>
                    )}
                    <p className="exercise-detail-text">{block.body}</p>
                </div>
            ))}
        </div>
    );
};

export default ExerciseDescription;
