import {Input} from "@heroui/input";
import {Checkbox} from "@heroui/checkbox";

function Tasks() {

    return (
        <div className="container mx-auto p-4 max-w-md">

            <div className="justify-between flex items-center mb-4">
                <Input type="text" placeholder="+ Add a Task"/>
            </div>
            <div className="flex flex-col gap-2">
                <Checkbox>Meet salim</Checkbox>
                <Checkbox>Meet salim</Checkbox>
            </div>
        </div>
    )

}

export default Tasks;