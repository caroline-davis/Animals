import React, { useState } from 'react';
import './Styles/ContactForm.css'

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [feedbackCategory, setFeedbackCategory] = useState('')
    const [feedback, setFeedback] = useState('')
    const [file, setFile] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    console.log(error, loading)

    function onSubmit() {
        const formInfo = {
            "name": name,
            "email": email,
            "feedbackCategory": feedbackCategory,
            "feedback": feedback,
            "file": file
        }
        setLoading(true)
        try {
            setLoading(false)
            setError(false)
            setSubmitted(true)
            // would usually do an api call here to send and save the data to the backend
            console.log(formInfo)
            return formInfo
        } catch {
            setLoading(false)
            setError(true)
            setSubmitted(false)
            console.log('error')
        }
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="input-name">Name:</label>
                    <input type='text'
                        className="form-control"
                        id="input-name"
                        placeholder="John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.name)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="input-email">Email address:</label>
                    <input type="email"
                        className="form-control"
                        id="input-email"
                        aria-describedby="emailHelp"
                        placeholder="johnsmith@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <small id="emailHelp"
                        className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <select className="form-control"
                        id="info-category"
                        value={feedbackCategory}
                        onChange={(e) => setFeedbackCategory(e.target.value)}>
                        <option value="">Select category</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Account">Account</option>
                        <option value="Enquiries">Enquiries</option>
                        <option value="Donations">Donations</option>
                        <option value="Work with us">Work with us</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="feedback-text-area">Message</label>
                    <textarea className="form-control"
                        id="feedback-text-area"
                        rows="3"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}>
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="file-upload">Attach file</label>
                    <div>
                        <input type="file"
                            className="form-control-file"
                            id="file-upload"
                            value={file}
                            onChange={(e) => setFile(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-primary"
                    type="button"
                    onClick={(e) => {
                        onSubmit()
                    }}>Submit form</button>
            </form >
            {!error && submitted && !loading && <div className="alert alert-success" role="alert">
                You have successfully submitted the form
</div>}
        </>
    )
}
