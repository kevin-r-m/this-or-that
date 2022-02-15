import React from 'react';
import LeaderboardRow from './LeaderboardRow';

function Leaderboard({data}) {
    return (
        <div>

            <table>
                <tbody>
                    <tr>
                        <th class="border border-right-0 pl-2">
                            Competitor Name
                        </th>
                        <th class="border pl-2">
                            Wins
                        </th>
                        <th class="border pl-2">
                            Loss
                        </th>
                        <th class="border pl-2">
                            Votes
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