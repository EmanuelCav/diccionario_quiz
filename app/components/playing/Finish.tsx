import { View, Text } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import { FinishPropsType } from '../../types/props.types'

import StatisticsFinish from './components/finish/StatisticsFinish'
import ActionsFinish from './components/finish/ActionsFinish'

const Finish = ({ corrects, questions, showErrors, continueHome, isGameError }: FinishPropsType) => {
    return (
        <View style={playingStyles.containerPreFinish}>
            <View style={playingStyles.containFinish}>
                {
                    isGameError ?
                        <View style={playingStyles.containerStatisticsFinish}>
                            <Text style={playingStyles.textPreFinish}>¡Repaso realizado!</Text>
                        </View>
                        :
                        <StatisticsFinish questions={questions} corrects={corrects} />
                }
                <ActionsFinish areErrors={corrects < questions} showErrors={showErrors} continueHome={continueHome} />
            </View>
        </View>
    )
}

export default Finish