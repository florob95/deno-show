import {useState, useEffect} from 'preact/hooks';

type SwipeableProps = {
    children: preact.ComponentChildren;
}

export function Swipeable({children}: SwipeableProps) {
    if (!Array.isArray(children)) return undefined;

    const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

    const handleKeyDown = (e: KeyboardEvent) => {
        const scrollPart = Math.round(100 / children.length)
        if (e.key === 'ArrowUp') {
            setCurrentScrollIndex((prevIndex) => {
                return Math.min(0, prevIndex + scrollPart)
            })
        } else if (e.key === 'ArrowDown') {
            setCurrentScrollIndex((prevIndex) => {
                return prevIndex - scrollPart
            })
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="overflow-hidden w-full h-full relative">
            <div
                className="flex flex-col transition-transform duration-300 ease-in-out"
                style={{transform: `translateY(${currentScrollIndex}%)`}}
            >
                {children.map((child, index) => (
                    <div key={index} className="w-full h-screen">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

