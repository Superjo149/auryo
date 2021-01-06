import { Button } from '@blueprintjs/core';
import * as actions from '@common/store/actions';
import { ConfigValue } from '@common/store/config';
import { CheckboxConfig } from '@renderer/pages/settings/components/CheckboxConfig';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  onNext(): void;
}

export const PrivacyStep = React.memo<Props>(({ onNext }) => {
  const dispatch = useDispatch();

  const setConfigKey = useCallback(
    (key: string, value: ConfigValue) => {
      return dispatch(actions.setConfigKey(key, value));
    },
    [dispatch]
  );

  return (
    <>
      <h1 className="animated fadeInLeft faster first">🔒 Privacy</h1>
      <div className="sub-title animated fadeInLeft faster second">
        <CheckboxConfig name="Send anonymous statistics" configKey="app.analytics" alignIndicator="left" />

        <div className="description mb-3">
          I use <a href="https://analytics.google.com">google analytics</a> to get an insight how large the userbase of
          the app is. Your ip is being anonymized and no other data than page views and sessions are being tracked.
        </div>

        <CheckboxConfig name="Send crash reports" configKey="app.crashReports" alignIndicator="left" />

        <div className="description">
          I use <a href="https://sentry.io">Sentry</a> for error logging. No personal info from your pc is being sent.
          If we don't have your crash reports, it's harder for us to fix bugs.
        </div>
      </div>

      <div className="login_section  animated fadeInLeft faster third">
        <Button color="primary" onClick={onNext}>
          Let's get this party started
        </Button>
      </div>
    </>
  );
});
