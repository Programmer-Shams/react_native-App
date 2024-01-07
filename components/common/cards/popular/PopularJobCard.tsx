import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { checkImageURL } from '../../../../utils'
import { container, jobName, logoContainer, publisher, styles } from './popularjobcard.style';

type PopularJobCardProps = {
  selectedJob: string;
  item: any;
  handleCardPress: (item: any) => void;
}

const PopularJobCard = ({selectedJob, item, handleCardPress}: PopularJobCardProps) => {
  return (
    <TouchableOpacity
    style={container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName}numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard