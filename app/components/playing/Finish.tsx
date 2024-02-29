import { View, Text, Dimensions } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import { FinishPropsType } from '../../types/props.types'

import StatisticsFinish from './components/finish/StatisticsFinish'
import ActionsFinish from './components/finish/ActionsFinish'
import HelpAdd from './components/finish/HelpAdd'

const Finish = ({ corrects, questions, showErrors, continueHome, isGameError, handleHelp, isAdd }: FinishPropsType) => {
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
                {
                    isAdd ? <Text style={[playingStyles.textPreFinish, { marginTop: Dimensions.get("window").height / 92 }]}>¡Ayudas entregadas!</Text>
                    : <HelpAdd handleHelp={handleHelp} />
                }
                <ActionsFinish areErrors={corrects < questions} showErrors={showErrors} continueHome={continueHome} />
            </View>
        </View>
    )
}

export default Finish