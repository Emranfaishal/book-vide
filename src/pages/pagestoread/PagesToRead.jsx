import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis,
    ResponsiveContainer
} from 'recharts';

const books = [
    { title: 'The Great Gatsby', pages: 192, color: '#3b9de8', gradId: 'blue' },
    { title: 'To Kill a Mockingbird', pages: 281, color: '#1fc89b', gradId: 'teal' },
    { title: '1984', pages: 328, color: '#f0b429', gradId: 'amber' },
    { title: 'The Alchemist', pages: 177, color: '#f4895f', gradId: 'coral' },
    { title: 'Pride and Prejudice', pages: 279, color: '#e84040', gradId: 'red' },
];

const COLORS = {
    blue: ['#3b9de8', '#2178c4'],
    teal: ['#1fc89b', '#0ea87f'],
    amber: ['#f0b429', '#d49419'],
    coral: ['#f4895f', '#e0623a'],
    red: ['#e84040', '#c22020'],
};

function buildSpikeData(pages) {
    return Array.from({ length: 61 }, (_, i) => {
        const t = i / 60;
        const bell = Math.exp(-Math.pow((t - 0.5) * 6, 2));
        return {
            x: Math.round(t * 100 * 10) / 10,
            y: Math.round(pages * bell * 10) / 10,
        };
    });
}

function SpikeChart({ book }) {
    const data = buildSpikeData(book.pages);
    const [c1, c2] = COLORS[book.gradId];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: book.color, marginBottom: 4 }}>
                {book.pages}
            </div>

            <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id={`grad-${book.gradId}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={c2} stopOpacity={1} />
                            <stop offset="100%" stopColor={c1} stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                    <YAxis domain={[0, 340]} hide />
                    <XAxis dataKey="x" hide />
                    <Area
                        type="monotone"
                        dataKey="y"
                        stroke="none"
                        fill={`url(#grad-${book.gradId})`}
                        animationDuration={800}
                    />
                </AreaChart>
            </ResponsiveContainer>

            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: 6 }}>
                {book.title}
            </div>
        </div>
    );
}

const PagesToRead = () => {
    return (
        <div style={{ padding: '10px', minHeight: '50vh', fontFamily: "'DM Sans', sans-serif" }}>

            <main style={{ padding: '10px' }}>
                <div style={{ background: '#12151f', borderRadius: 12, border: '0.5px solid rgba(255,255,255,0.08)', padding: '28px 32px 16px' }}>
                    <div style={{ display: 'flex', gap: 0 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: 8, paddingBottom: 28, paddingTop: 18, minWidth: 36 }}>
                            {[340, 255, 170, 85, 0].map((v) => (
                                <span key={v} style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{String(v).padStart(2, '0')}</span>
                            ))}
                        </div>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <div style={{ position: 'absolute', inset: 0, bottom: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{ borderTop: '1px dashed rgba(255,255,255,0.07)', width: '100%' }} />
                                ))}
                            </div>
                            <div style={{ display: 'flex', position: 'relative', zIndex: 1 }}>
                                {books.map((book) => <SpikeChart key={book.title} book={book} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default PagesToRead;