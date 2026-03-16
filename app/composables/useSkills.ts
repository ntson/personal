import { collection, getDocs, query, where } from 'firebase/firestore';
import type { Skill } from '~/models/skill';

export async function useSkills() {
  const { $db } = useNuxtApp();

  const {
    data: skills,
    status,
    pending,
    error,
  } = await useAsyncData<Skill[]>('skills', async () => {
    const skillsCollection = collection($db, 'skills');
    const q = query(skillsCollection, where('show', '==', true));

    const skillsSnapshot = await getDocs(q);

    return skillsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Skill[];
  });

  return {
    skills: skills.value,
    isIdle: status.value === 'idle',
    isLoading: pending,
    isError: status.value === 'error',
    isCompleted: status.value === 'success',
    error,
  };
}
