import React from "react";

export default function ExpandCard(){
    const [expandedCard, setExpandedCard] = React.useState(null);

    function handleClick(i){
            setExpandedCard(prev => (prev === i ? null : i));
        }
    
    return {
        expandedCard, handleClick
    };
}