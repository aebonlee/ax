-- ============================================================
-- AX & DX 학습 플랫폼 — Supabase 테이블 설정
-- 접두사: ax_
-- 실행: Supabase SQL Editor에서 실행
-- ============================================================

-- 1. 북마크 테이블 (학습 콘텐츠 북마크)
CREATE TABLE IF NOT EXISTS ax_bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  path_id TEXT NOT NULL,          -- learning path id (ax-overview, dx-strategy, etc.)
  section_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_ax_bookmarks_user ON ax_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_ax_bookmarks_path ON ax_bookmarks(path_id);

-- RLS 활성화
ALTER TABLE ax_bookmarks ENABLE ROW LEVEL SECURITY;

-- 정책: 본인 데이터만 접근
CREATE POLICY "ax_bookmarks_select" ON ax_bookmarks
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "ax_bookmarks_insert" ON ax_bookmarks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "ax_bookmarks_delete" ON ax_bookmarks
  FOR DELETE USING (auth.uid() = user_id);

-- 2. 학습 진행률 테이블
CREATE TABLE IF NOT EXISTS ax_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  path_id TEXT NOT NULL,
  completed_sections INTEGER[] DEFAULT '{}',
  last_section INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, path_id)
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_ax_progress_user ON ax_progress(user_id);

-- RLS 활성화
ALTER TABLE ax_progress ENABLE ROW LEVEL SECURITY;

-- 정책
CREATE POLICY "ax_progress_select" ON ax_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "ax_progress_insert" ON ax_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "ax_progress_update" ON ax_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- 3. 댓글 테이블
CREATE TABLE IF NOT EXISTS ax_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  path_id TEXT NOT NULL,
  content TEXT NOT NULL,
  user_name TEXT DEFAULT '',
  user_avatar TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_ax_comments_path ON ax_comments(path_id);
CREATE INDEX IF NOT EXISTS idx_ax_comments_created ON ax_comments(created_at DESC);

-- RLS 활성화
ALTER TABLE ax_comments ENABLE ROW LEVEL SECURITY;

-- 정책: 읽기는 모두, 쓰기는 본인만
CREATE POLICY "ax_comments_select" ON ax_comments
  FOR SELECT USING (true);

CREATE POLICY "ax_comments_insert" ON ax_comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "ax_comments_delete" ON ax_comments
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================================
-- 완료! ax_ 접두사 테이블 3개 생성됨:
-- - ax_bookmarks (북마크)
-- - ax_progress (학습 진행)
-- - ax_comments (댓글)
-- ============================================================
