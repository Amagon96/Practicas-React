import { useState, useEffect } from 'react'

export const Follower = () => {

    const [enabled, setEnabled] = useState(false);
    const [ position, setPosition ] = useState({ x: 0, y: 0});

    useEffect(() => {
        const handleMove = (event) => {
        const { clientX, clientY } = event;
        setPosition({ x: clientX, y: clientY });
    }

    if (enabled) {
        window.addEventListener('mousemove', handleMove);
    }

    return () => window.removeEventListener('mousemove', handleMove)
    }, [enabled])

    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)

        return () => document.body.classList.remove('no-cursor')
    }, [enabled])

    return (
        <>
        <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
        <div style={{ 
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`,
        }}/>
        </>
    )
}