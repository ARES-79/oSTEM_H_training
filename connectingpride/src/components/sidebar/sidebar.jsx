import "./sidebar.css"

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarItems">
                <div className="sideBarItem">
                    <span className="sideBarTitle"> About oSTEM </span>
                    <img src="/images/SideBarLogo.png" alt="logo" />
                    <p className="sideBarAbout">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus integer feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean pharetra magna ac. Id nibh tortor id aliquet lectus proin nibh nisl. Nunc sed velit dignissim sodales ut.
                    </p>
                </div>
                <div className="sideBarItem">
                    <span className="sideBarTitle"> Categories </span>
                    <ul className="sideBarList">
                        <li className="sidebarListItem">
                            cat1
                        </li>
                        <li className="sidebarListItem">
                            cat2
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}