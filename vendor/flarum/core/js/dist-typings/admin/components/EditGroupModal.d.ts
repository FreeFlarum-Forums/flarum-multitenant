/**
 * The `EditGroupModal` component shows a modal dialog which allows the user
 * to create or edit a group.
 */
export default class EditGroupModal extends Modal<import("../../common/components/Modal").IInternalModalAttrs> {
    constructor();
    oninit(vnode: any): void;
    group: any;
    nameSingular: Stream<any> | undefined;
    namePlural: Stream<any> | undefined;
    icon: Stream<any> | undefined;
    color: Stream<any> | undefined;
    isHidden: Stream<any> | undefined;
    title(): any[];
    content(): JSX.Element;
    fields(): ItemList<any>;
    submitData(): {
        nameSingular: any;
        namePlural: any;
        color: any;
        icon: any;
        isHidden: any;
    };
    onsubmit(e: any): void;
    deleteGroup(): void;
}
import Modal from "../../common/components/Modal";
import Stream from "../../common/utils/Stream";
import ItemList from "../../common/utils/ItemList";
