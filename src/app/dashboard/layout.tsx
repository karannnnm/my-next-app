

export default function DashboardLayout({
    children,
    users,
    notifs,
    revenue,
    login,
}:{   
    children:React.ReactNode,
    users:React.ReactNode,
    notifs:React.ReactNode,
    revenue:React.ReactNode,
    login:React.ReactNode
}) {
    const isLoggedIn = true
    
    return isLoggedIn? (
        <div>
        <div>{children}</div>
        <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display:'flex',flex:1}}>{notifs}</div>
        </div>
        </div>
    ) : (login);
}