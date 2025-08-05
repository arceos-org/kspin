(function() {
    var implementors = Object.fromEntries([["kspin",[["impl&lt;'a, G, T&gt; UnsafeUnpin for <a class=\"struct\" href=\"kspin/struct.BaseSpinLockGuard.html\" title=\"struct kspin::BaseSpinLockGuard\">BaseSpinLockGuard</a>&lt;'a, G, T&gt;<div class=\"where\">where\n    &lt;G as BaseGuard&gt;::State: UnsafeUnpin,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>",1,["kspin::base::BaseSpinLockGuard"]],["impl&lt;G, T&gt; UnsafeUnpin for <a class=\"struct\" href=\"kspin/struct.BaseSpinLock.html\" title=\"struct kspin::BaseSpinLock\">BaseSpinLock</a>&lt;G, T&gt;<div class=\"where\">where\n    T: UnsafeUnpin + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>",1,["kspin::base::BaseSpinLock"]]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[850]}