import FatalMessageComponent from '../';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'TwApps/molecules/FatalMessage',
    decorators: [withKnobs],
}

export const FatalMessage = () => ( 
    <FatalMessageComponent
        errMessage={text('メッセージ', 'エラーが発生しました')}
        basePath={text('basePath', 'http://localhost:6006')}
    />
);