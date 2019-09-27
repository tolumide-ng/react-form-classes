import React, {useState} from 'react';
import {PropTypes} from 'prop-types';

const Form = () => {
    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        url: '',
    })

    const errors = {}

    const onChange = e => {
        e.persist();
        const {name, value} = e.target;
        setValues(prevState => ({...prevState, name: value}))
        // `${name}`
    }

    const onSubmit = e => {
        e.preventDefault();
        values.name && !/^([a-zA-Z]+ [a-zA-Z]+)$/.test(values.name) && (errors['name'] = 'name is not valid')
        values.name && /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/.test(values.name) && (errors['name'] = '')
        values.phone && !/[^01]\d{10}\b/.test(values.phone) && (errors['phone'] = 'phone number is not valid')
        values.phone && /[^01]\d{10}\b/.test(values.phone) && (errors['phone'] = '')
        values.email && !/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/.test(values.email) && (errors['email'] = 'email is not valid')
        values.email && /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/.test(values.email) && (errors['email'] = '')
        values.url && !(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).test(values.url) && (errors['url'] = 'url is not valid')
        values.url && (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).test(values.url) && (errors['url'] = '')

        return(
            <div className='row'>
                <h1 className='text-center'>Form Validation</h1>
                <form>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input className='name' onChange={onChange} placeholder='Enter your name'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input className='email' onChange={onChange} placeholder='Enter your email'></input>
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input className='phone' onChange={onChange} placeholder='Enter your phone number'></input>
                </div>
                <div>
                    <label htmlFor='url' placeholder='Enter your blog url'>Blog URL:</label>
                    <input className='url' onChange={onChange}></input>
                </div>
                <div className="small-6 small-centered text-center columns">
                    <button className="button success expand round text-center" onClick={onSubmit}>Verify</button>
               </div>
            </form>
            </div>
        )
    }
}

export default Form;