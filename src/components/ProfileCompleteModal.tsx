import { useState, type ReactElement, type FormEvent } from 'react';
import type { User } from '@supabase/supabase-js';
import { updateProfile } from '../utils/auth';

interface ProfileCompleteModalProps {
  user: User;
  onComplete: () => Promise<void>;
}

export default function ProfileCompleteModal({ user, onComplete }: ProfileCompleteModalProps): ReactElement {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      await updateProfile(user.id, { name: name.trim(), display_name: name.trim() });
      await onComplete();
    } catch (err) {
      console.error('Profile update error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>프로필 완성</h3>
        <p>표시할 이름을 입력해주세요.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="이름 (표시명)"
            autoFocus
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? '저장 중...' : '저장'}
          </button>
        </form>
      </div>
    </div>
  );
}
