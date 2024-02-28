import { View, Text } from 'react-native'

import { optionsStyles } from '../../styles/options.styles'

import OptionGame from './components/Option'

import { AmountOptionsPropsType } from '../../types/props.types'
import { TextOptions } from '../../types/key.types'
import { IOptions } from '../../interface/User'

const AmountOptions = ({ amountOptions, setOptionsData }: AmountOptionsPropsType) => {

    const changeOption = (value: TextOptions) => {
        setOptionsData((optionData: IOptions) => ({
            ...optionData, amountOptions: value
        }))
    }

    return (
        <View style={optionsStyles.containerOptions}>
            <Text style={optionsStyles.titleOption}>Elige la cantidad opciones para las preguntas</Text>
            <OptionGame text='2' amountOptions={amountOptions} func={changeOption} />
            <OptionGame text='4' amountOptions={amountOptions} func={changeOption} />
            <OptionGame text='6' amountOptions={amountOptions} func={changeOption} />
            <OptionGame text='Sin opciones' amountOptions={amountOptions} func={changeOption} />
        </View>
    )
}

export default AmountOptions