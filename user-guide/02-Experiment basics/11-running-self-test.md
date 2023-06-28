---
title: Running a self-test
slug: /running-self-test
---

To get the best results and confirm your Pioreactor is working as expected, it's advisable to run a self-test on your Pioreactor after setting it up initially. The self-test routine can catch common errors that may compromise your data collection.

### How to run the self-test routine


Start on the _Pioreactors_ page: 

![](/img/user-guide/pioreactors_page_self_test.png)
![](/img/user-guide/self_test_pre.png)


Add your vial, with media / water (and possibly inoculated), and click "Start". The Pioreactor will start running tests against expected output and report back to you success and failures of those tests. 


![](/img/user-guide/self_test_running.png)



Depending on the results of each test, you'll see success and failures:


![](/img/user-guide/self_test_results.png)



:::info
The self-test routine is optional. Even with test failures, the Pioreactor is still operational (perhaps not where the test failed though!). We highly recommend a self-test at least after your initial setup. 
:::


### Explanation of each test

**Pioreactor HAT is detected** checks if the Pioreactor HAT is correctly placed on top of the Raspberry Pi. A non-trivial failure here suggests a problem connection between the HAT and the RPi, a failure with the i2c channel, or a failure with the RP2040 chip on the HAT.

**Photodiodes are responsive to IR LED** checks to ensure that the IR photodiode(s) have a linear relationship with the IR LED's output. The linear relationship is important. Common reasons why this test fails include:

- The IR LED connected to the the wrong LED output. Make sure that the IR LED is identified correctly in the config.ini
- A loose (or absent) connection to the Pioreactor HAT, either in the photodiode(s) or the IR LED.

The test will also report any valid IR LED & photodiode relationships in the dialog box. For example, `IR ⇝ REF` means that the REF photodiode has a linear relationship with the IR LED. Similarly, `IR ⇝ 45` means the the photodiode in the 45° pocket has a linear relationship with the IR LED. The absent of a relationship here can tell you about what might be wrong.

**No ambient IR light detected** checks that the photodiodes are detecting a near-0 signal when the IR LED is completely off. This test may fail if a powerful IR signal is shining into or onto the Pioreactor's body (aka the Sun - don't put the Pioreactor in direct sunlight and avoid windows). Also make sure that the caps are on all the Pioreactor's LED pockets.

**Reference photodiode is the correct magnitude** checks, if using the reference photodiode (REF), that the REF signal is less than 0.256 volts when the IR LED is at the level specified in the config.ini's `[od_config].[ir_led_intensity]` section. If this test fails,
 - confirm that in your config.ini that `REF` is present for one of the channels under `[od_config.photodiode_channel]`
 - check the positioning of the REF photodiode (should be adjacent the the IR LED, snugly inserted, and with a cap).
 - If still failing, try reducing the value in `[od_config].[ir_led_intensity]`.


**Reference photodiode is in the correct position** checks, if using the reference photodiode (REF), that the REF cable is inserted into the correct photodiode position (channel 1 or 2). The correct position is provided in the config.ini's `[od_config.photodiode_channel]` section. The test compares the variances of the two signals (from photodiode channels 1 and 2), and the lower variance one is usually the REF. **Note: this is a flakey test, and can fail even when position correctly**. Confirm that in your config.ini that `REF` is present for one of the channels under `[od_config.photodiode_channel]`


**Heating PCB is detected** checks that the heating PCB is correctly attached to the Pioreactor HAT. A non-trivial failure here suggests a problem when the i2c channel, a loose connection, or damage to the heating PCB.

**Heating is responsive** checks for a linear relationship between the temperature sensor and the PWM heating system.

**Stirring RPM is responsive** checks for a linear relationship between PWM stirring system and the Hall sensor that measure's RPM. If this fails, check that the stirring power is connected correctly (and in the location specified in config.ini's `[PWM]` section). Another reason for failure is that the magnets are too far away from the base of the vial. See [stirring troubleshooting](/user-guide/troubleshooting-stirring).


**AUX power supply is appropriate value** checks that the AUX power voltage is between 0V and 18V. If no AUX power is connected to the Pioreactor, the default voltage is 5V.




