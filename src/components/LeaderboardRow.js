import React from 'react';

function LeaderboardRow(competitorInfo) {

    competitorInfo = competitorInfo.competitorInfo
    
    return (
        <tr>
            <td class="border">
                {competitorInfo.name}
            </td>
            <td class="border">
                {competitorInfo.wins}
            </td>
            <td class="border">
                {competitorInfo.losses}
            </td>
            <td class="border">
                {competitorInfo.totalVotes}
            </td>
        </tr>
    );
}

export default LeaderboardRow;