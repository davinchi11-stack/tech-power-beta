
export function Footer () {
    const date = new Date().getFullYear()
    const year = date.toString()
    

    return (
        <div className="footer">
            <div className="footer_main wrapper small">
                <div className="right">
                <p className='reserve'>Copyright ©{year}<span> Techpowerinc</span> All rights reserved.</p>
                </div>
                <div className="left">
                    <ul className="ft-list">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}