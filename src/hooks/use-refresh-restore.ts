import {
  SELECTED_DISTANCE_KEY,
  SELECTED_INTERESTS_KEY,
  SELECTED_MODE_KEY,
  POSITION_KEY,
} from '@/lib/constants/local-storage-key';
import { selectedDistanceState } from '@/store/distance/atom';
import { selectedInterestState } from '@/store/interest/atom';
import { selectedModeState } from '@/store/mode/atom';
import { positionState } from '@/store/position/atom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useRefreshRestore = () => {
  const setSelectedDistance = useSetRecoilState(selectedDistanceState);
  const setSelectedInterests = useSetRecoilState(selectedInterestState);
  const setSelectedMode = useSetRecoilState(selectedModeState);
  const setPosition = useSetRecoilState(positionState);

  useEffect(() => {
    const storedDistance = localStorage.getItem(SELECTED_DISTANCE_KEY);
    if (!storedDistance) return;
    setSelectedDistance(JSON.parse(storedDistance));
  }, [setSelectedDistance]);

  useEffect(() => {
    const storedInterests = localStorage.getItem(SELECTED_INTERESTS_KEY);
    if (!storedInterests) return;
    setSelectedInterests(JSON.parse(storedInterests));
  }, [setSelectedInterests]);

  useEffect(() => {
    const storedMode = localStorage.getItem(SELECTED_MODE_KEY);
    if (!storedMode) return;
    setSelectedMode(JSON.parse(storedMode));
  }, [setSelectedMode]);

  useEffect(() => {
    const storedPosition = localStorage.getItem(POSITION_KEY);
    if (!storedPosition) return;
    setPosition(JSON.parse(storedPosition));
  }, [setPosition]);
};

export default useRefreshRestore;
