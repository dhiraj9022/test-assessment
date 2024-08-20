import React, { useState } from 'react';
import { resetPassword } from '../../services/authService';

function ResetPassword() {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(token, newPassword);
            alert('Password reset successful');
        } catch (error) {
            console.error('Reset password failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <div>
                <label>Token:</label>
                <input type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
            </div>
            <div>
                <label>New Password:</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ResetPassword;
