import MessageAllUnreadView from '@/app/com/main/view/MessageAllUnreadView';
import AbstractMaterial from '@/app/base/context/AbstractMaterial';
import messageAllUnreadViewModel from '@/platform/wap/view/model/MessageAllUnreadViewModel';
import AppContext from '@/app/base/context/AppContext';

export default class WapMessageAllUnreadViewImpl extends AbstractMaterial implements MessageAllUnreadView {

    public constructor(protected appContext: AppContext) {
        super(appContext);
    }

    public setRed(red: boolean, count: number): void {
        messageAllUnreadViewModel.setRed(red, count);
    }
}
