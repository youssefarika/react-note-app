import { Link } from "react-router-dom"

type Titling = {
    title: string,
    variant?: string
}

function Nav({ title, variant }: Titling) {
    return (
        <>
            <div className="flex pt-4 items-center justify-between">
                <Link to= "/" className='text-[2.5rem] font-semibold text-gray-800'>{title}</Link>
                <div className="buttons">
                    {variant ? (
                            <>
                                <Link to="New" className={variant}>
                                    Create
                                </Link>
                                <button className="btn btn-sm btn-outline h-10">
                                    Edit Tags
                                </button>
                            </>
                        ) : null}
                </div>
            </div>
        </>
    )
}

export default Nav