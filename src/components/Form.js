import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''})

    return (
        <form>
            <input
                id='name'
                type='text'
                name='name'
                value={member.name}
            />
            <input
                id='email'
                type='text'
                name='email'
                value={member.email}
            />
            <input
                id='role'
                type='text'
                name='role'
                value={member.role}
            />
        </form>
    )
}

export default Form;