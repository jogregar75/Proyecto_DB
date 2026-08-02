CREATE TABLE public.popup_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enabled boolean NOT NULL DEFAULT false,
  media_url text,
  media_type text NOT NULL DEFAULT 'image',
  title text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.popup_settings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.popup_settings TO authenticated;
GRANT ALL ON public.popup_settings TO service_role;

ALTER TABLE public.popup_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view popup settings" ON public.popup_settings FOR SELECT USING (true);
CREATE POLICY "Admins can insert popup settings" ON public.popup_settings FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update popup settings" ON public.popup_settings FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete popup settings" ON public.popup_settings FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_popup_settings_updated_at BEFORE UPDATE ON public.popup_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.popup_settings (enabled, media_type) VALUES (false, 'image');