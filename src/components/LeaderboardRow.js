import React from 'react';

function LeaderboardRow(competitorInfo) {

    competitorInfo = competitorInfo.competitorInfo
    
    return (
        <tr>
            <td>
                {competitorInfo.name}
            </td>
            <td>
                {competitorInfo.wins}
            </td>
            <td>
                {competitorInfo.losses}
            </td>
            <td>
                {competitorInfo.totalVotes}
            </td>
        </tr>
    );
}

export default LeaderboardRow;