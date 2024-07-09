import { NavLink } from "react-router-dom"
import { PreviewInfo } from "../components/Preview/PreviewInfo"

export const Preview = () => {
  return (
    <div className="preview-page">
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="btn-transparent">Back to editor</NavLink>
          {/* <button className="btn-save">Share link</button> */}
        </nav>
        <div className="card">
            <PreviewInfo/>
        </div>
      </div>
    </div>
  )
}
