import { View, Text } from "react-native"

import ButtonsSound from "./components/ButtonsSound"

import { optionsStyles } from "../../styles/options.styles"

import { SoundsPropsType } from "../../types/props.types"

const Sounds = ({ sounds, changeSounds }: SoundsPropsType) => {
    return (
        <View style={optionsStyles.containerSounds}>
            <Text style={optionsStyles.titleOption}>Sonidos</Text>
            <ButtonsSound changeSounds={changeSounds} sounds={sounds} />
        </View>
    )
}

export default Sounds