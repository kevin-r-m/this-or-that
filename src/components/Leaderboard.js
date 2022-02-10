import React from 'react';
import LeaderboardRow from './LeaderboardRow';

function Leaderboard({data}) {
    return (
        <div>

            <table>
                <tbody>
                    <tr>
                        <th>
                            Competitor Name
                        </th>
                        <th>
                            Wins
                        </th>
                        <th>
                            Losses
                        </th>
                        <th>
                            Total votes
                        </th>
                    </tr>
                    {data.map(item => {
                        return (
                            <LeaderboardRow competitorInfo={item} key={item.id}/>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    );
}

export default Leaderboard;