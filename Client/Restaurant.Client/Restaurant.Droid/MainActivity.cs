﻿using System;

using Android.App;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using ReactiveUI;
using System.Reactive.Linq;
using Android.Graphics.Drawables;
using ImageCircle.Forms.Plugin.Droid;
using NControl.Controls.Droid;

namespace Restaurant.Droid
{
    [Activity(Label = "Restaurant", Icon = "@drawable/icon", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
    public class MainActivity : Xamarin.Forms.Platform.Android.FormsApplicationActivity
    {
        protected override void OnCreate(Bundle bundle)
        {

            base.OnCreate(bundle);
            ActionBar.SetIcon(new ColorDrawable(Android.Graphics.Color.Transparent));            
            Xamarin.Forms.Forms.Init(this, bundle);
            ImageCircleRenderer.Init();
            NControls.Init();
            //if ((int)Android.OS.Build.VERSION.SdkInt >= 21) {  }
          
            UserError.RegisterHandler(ue =>
            {
                var toast = Toast.MakeText(this, ue.ErrorMessage, ToastLength.Short);
                toast.Show();

                return Observable.Return(RecoveryOptionResult.CancelOperation);
            });

            LoadApplication(new App());

            var toolbar = FindViewById<View>(Resource.Id.action_bar);

        }

        public override bool OnCreateOptionsMenu(IMenu menu)
        {
            MenuInflater.Inflate(Resource.Menu.home_menu, menu);
            return base.OnCreateOptionsMenu(menu);
        }


        public override bool OnPrepareOptionsMenu(IMenu menu)
        {
            return base.OnPrepareOptionsMenu(menu);
        }
    }
}

