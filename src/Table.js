import { useState } from 'react';

const Table = () => {
    const [data, setData] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ]);

    const sortByDate = () => {
        const sorted = [...data].sort((a, b) => {
            const dateDiff = new Date(b.date) - new Date(a.date);
            if (dateDiff === 0) {
                return b.views - a.views;
            }
            return dateDiff;
        });
        setData(sorted);
    };

    const sortByViews = () => {
        const sorted = [...data].sort((a, b) => {
            const viewsDiff = b.views - a.views;
            if (viewsDiff === 0) {
                return new Date(b.date) - new Date(a.date);
            }
            return viewsDiff;
        });
        setData(sorted);
    };

    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={sortByDate}>Sort by Date</button>
            <button onClick={sortByViews}>Sort by Views</button>
            <table border="1" cellPadding="8" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.views}</td>
                            <td>{entry.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
