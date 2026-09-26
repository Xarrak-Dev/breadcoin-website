
async function login(user, pass) {
    const data = await fetch('https://api.breadfriend.org/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: user,  
            pass: pass 
        })
    })
}