import React from 'react';

function LeaderboardRow(competitorInfo) {

    competitorInfo = competitorInfo.competitorInfo
    
    return (
        <tr>
            <td className="border">
                {competitorInfo.name}
            </td>
            <td className="border">
                {competitorInfo.wins}
            </td>
            <td className="border">
                {competitorInfo.losses}
            </td>
            <td className="border">
                {competitorInfo.totalVotes}
            </td>
        </tr>
    );
}

export default LeaderboardRow;