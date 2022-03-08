from ronglian_sms_sdk import SmsSDK

accId = '8a216da87f543756017f5eafa4db0205'
accToken = '2dfb538528b04c2686ccd5b8a0daaa6d'
appId = '8a216da87f543756017f5eafa62f020c'

def send_message():
    sdk = SmsSDK(accId, accToken, appId)
    tid = '1'
    mobile = '18776240784'
    datas = ('123456', '5')
    resp = sdk.sendMessage(tid, mobile, datas)
    print(resp)

if __name__=='__main__':
    send_message()