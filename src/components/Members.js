import React from 'react';

const Members = props => {
    return (
        <div className='member-list'>
            {props.teamMember.map(teammate => (
                <div className='teammate' key={teammate.id}>
                    <h2>{teammate.name}</h2>
                    <h3>{teammate.email}</h3>
                    <h4>{teammate.role}</h4>
                    <button onClick={() => (props.setMemberToEdit(teammate), props.setIsEditing(true))}>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default Members;