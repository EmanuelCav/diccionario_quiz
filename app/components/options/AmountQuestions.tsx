import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';

import { AmountQuestionsPropsType } from '../../types/props.types';
import { IOptions } from '../../interface/User';

import { optionsStyles } from '../../styles/options.styles';

const AmountQuestions = ({ amountQuestions, setOptionsData }: AmountQuestionsPropsType) => {
    return (
        <View style={optionsStyles.containerQuestions}>
            <Text style={optionsStyles.titleOption}>Mueve el cursor para elegir la cantidad de preguntas</Text>
            <Text style={optionsStyles.amountQuestionsText}>{amountQuestions}</Text>
            <Slider
                style={{ width: '100%' }}
                thumbTintColor='#f1889b'
                minimumValue={5}
                maximumValue={30}
                value={amountQuestions}
                minimumTrackTintColor="#f1889b"
                maximumTrackTintColor="#f99aaa"
                onValueChange={(value) => setOptionsData((optionData: IOptions) => ({
                    ...optionData, amountQuestions: value
                }))}
                step={5}
                accessibilityRole={undefined}
            />
        </View>
    )
}

export default AmountQuestions