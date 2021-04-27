import React, {ChangeEvent, useState, useEffect} from "react";

type ProfileStatusWithHooksType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks