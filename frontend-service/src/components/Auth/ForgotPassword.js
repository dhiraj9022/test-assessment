import React, { useState } from 'react';
import { forgotPassword } from '../../services/authService';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword(email);
            alert('Password reset token sent to email');
        } catch (error) {
            console.error('Forgot password failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ForgotPassword;
