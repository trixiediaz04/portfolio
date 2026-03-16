export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow">

      <div className="flex-1">
        <a className="btn btn-ghost float-left text-xl">Trixie Diaz</a>
      </div>

      <div className="flex gap-2">
        <a className="btn btn-ghost">About</a>
        <a className="btn btn-ghost">Projects</a>
        <a className="btn btn-primary">Contact</a>
      </div>

    </div>
  )
}